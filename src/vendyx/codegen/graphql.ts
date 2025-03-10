/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type AddCustomerToOrderInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type AddPaymentToOrderInput = {
  methodId: Scalars['ID']['input'];
};

export type AddShipmentToOrderInput = {
  methodId: Scalars['ID']['input'];
};

export type Address = Node & {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  phoneNumber: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  /** State or region */
  province: Scalars['String']['output'];
  references?: Maybe<Scalars['String']['output']>;
  streetLine1: Scalars['String']['output'];
  streetLine2?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type AddressJson = {
  __typename?: 'AddressJson';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  isDefault: Scalars['Boolean']['output'];
  phoneNumber: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  /** State or region */
  province: Scalars['String']['output'];
  references?: Maybe<Scalars['String']['output']>;
  streetLine1: Scalars['String']['output'];
  streetLine2?: Maybe<Scalars['String']['output']>;
};

export type AddressList = List & {
  __typename?: 'AddressList';
  count: Scalars['Int']['output'];
  items: Array<Address>;
  pageInfo: PageInfo;
};

export type Asset = Node & {
  __typename?: 'Asset';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  source: Scalars['String']['output'];
  type: AssetType;
  updatedAt: Scalars['Date']['output'];
};

export type AssetList = List & {
  __typename?: 'AssetList';
  count: Scalars['Int']['output'];
  items: Array<Asset>;
  pageInfo: PageInfo;
};

export enum AssetType {
  Image = 'IMAGE'
}

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A collection is a group of products that are displayed together in the storefront. */
export type Collection = Node & {
  __typename?: 'Collection';
  assets: AssetList;
  createdAt: Scalars['Date']['output'];
  /** The collection's description */
  description?: Maybe<Scalars['String']['output']>;
  /** The collection's order user to decide to show the collection in the storefront */
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The collection's name */
  name: Scalars['String']['output'];
  products: ProductList;
  /** The collection's slug used in the URL */
  slug: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};


/** A collection is a group of products that are displayed together in the storefront. */
export type CollectionAssetsArgs = {
  input?: InputMaybe<ListInput>;
};


/** A collection is a group of products that are displayed together in the storefront. */
export type CollectionProductsArgs = {
  input?: InputMaybe<ProductListInput>;
};

export type CollectionList = List & {
  __typename?: 'CollectionList';
  count: Scalars['Int']['output'];
  items: Array<Collection>;
  pageInfo: PageInfo;
};

export type Country = Node & {
  __typename?: 'Country';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  states: Array<State>;
  updatedAt: Scalars['Date']['output'];
};

export type CreateAddressInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  province: Scalars['String']['input'];
  references?: InputMaybe<Scalars['String']['input']>;
  streetLine1: Scalars['String']['input'];
  streetLine2?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCustomerInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrderInput = {
  line?: InputMaybe<CreateOrderLineInput>;
};

export type CreateOrderLineInput = {
  productVariantId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type Customer = Node & {
  __typename?: 'Customer';
  addresses: AddressList;
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  /** to customer be able to login, place orders, etc. the customer must be enabled */
  enabled: Scalars['Boolean']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  orders: OrderList;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};


export type CustomerAddressesArgs = {
  input?: InputMaybe<ListInput>;
};


export type CustomerOrdersArgs = {
  input?: InputMaybe<OrderListInput>;
};

export enum CustomerErrorCode {
  DisabledCustomer = 'DISABLED_CUSTOMER',
  EmailAlreadyExists = 'EMAIL_ALREADY_EXISTS',
  InvalidAccessToken = 'INVALID_ACCESS_TOKEN',
  InvalidCredentials = 'INVALID_CREDENTIALS',
  InvalidEmail = 'INVALID_EMAIL',
  PasswordsDoNotMatch = 'PASSWORDS_DO_NOT_MATCH'
}

export type CustomerErrorResult = {
  __typename?: 'CustomerErrorResult';
  code: CustomerErrorCode;
  message: Scalars['String']['output'];
};

export type CustomerList = List & {
  __typename?: 'CustomerList';
  count: Scalars['Int']['output'];
  items: Array<Customer>;
  pageInfo: PageInfo;
};

/**  Results  */
export type CustomerResult = {
  __typename?: 'CustomerResult';
  apiErrors: Array<CustomerErrorResult>;
  customer?: Maybe<Customer>;
};

export type GenerateCustomerAccessTokenResult = {
  __typename?: 'GenerateCustomerAccessTokenResult';
  accessToken?: Maybe<Scalars['String']['output']>;
  apiErrors: Array<CustomerErrorResult>;
};

/** A list of items with count, each result that expose a array of items should implement this interface */
export type List = {
  count: Scalars['Int']['output'];
  items: Array<Node>;
  pageInfo: PageInfo;
};

export type ListInput = {
  /** Skip the first n results */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** takes n result from where the skip position is */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCustomerToOrder: OrderResult;
  addLineToOrder: OrderResult;
  addPaymentToOrder: OrderResult;
  addShipmentToOrder: OrderResult;
  addShippingAddressToOrder: OrderResult;
  /** Create a new customer. */
  createCustomer: CustomerResult;
  createCustomerAddress: Address;
  createOrder: OrderResult;
  /** Create paypal order and return the paypal order id */
  createPaypalOrder: PaypalResult;
  /** Disable the customer account. */
  disableCustomer: CustomerResult;
  /** Generate a token for a customer. This token is used to modify the customer's data. */
  generateCustomerAccessToken: GenerateCustomerAccessTokenResult;
  /** Change the customer's password with the token received from the request recovery password email */
  recoverCustomerPassword: CustomerResult;
  removeCustomerAddress: Address;
  removeOrderLine: OrderResult;
  /** Send an email to the customer with a link to reset the password. The link contains a token that is used to execute the recoverCustomerPassword mutation. */
  requestRecoveryCustomerPassword: CustomerResult;
  /** Update the customer's data. */
  updateCustomer: CustomerResult;
  updateCustomerAddress: Address;
  /** Update the customer's password providing the current password and the new password */
  updateCustomerPassword: CustomerResult;
  updateOrderLine: OrderResult;
};


export type MutationAddCustomerToOrderArgs = {
  input: AddCustomerToOrderInput;
  orderId: Scalars['ID']['input'];
};


export type MutationAddLineToOrderArgs = {
  input: CreateOrderLineInput;
  orderId: Scalars['ID']['input'];
};


export type MutationAddPaymentToOrderArgs = {
  input: AddPaymentToOrderInput;
  orderId: Scalars['ID']['input'];
};


export type MutationAddShipmentToOrderArgs = {
  input: AddShipmentToOrderInput;
  orderId: Scalars['ID']['input'];
};


export type MutationAddShippingAddressToOrderArgs = {
  input: CreateAddressInput;
  orderId: Scalars['ID']['input'];
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationCreateCustomerAddressArgs = {
  input: CreateAddressInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationCreatePaypalOrderArgs = {
  orderId: Scalars['ID']['input'];
};


export type MutationGenerateCustomerAccessTokenArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRecoverCustomerPasswordArgs = {
  password: Scalars['String']['input'];
  urlToken: Scalars['String']['input'];
};


export type MutationRemoveCustomerAddressArgs = {
  addressId: Scalars['ID']['input'];
};


export type MutationRemoveOrderLineArgs = {
  lineId: Scalars['ID']['input'];
};


export type MutationRequestRecoveryCustomerPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
  addressId: Scalars['ID']['input'];
  input: UpdateAddressInput;
};


export type MutationUpdateCustomerPasswordArgs = {
  input: UpdateCustomerPasswordInput;
};


export type MutationUpdateOrderLineArgs = {
  input: UpdateOrderLineInput;
  lineId: Scalars['ID']['input'];
};

/** A node, each type that represents a entity should implement this interface */
export type Node = {
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type Option = Node & {
  __typename?: 'Option';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  values: Array<OptionValue>;
};

export type OptionList = List & {
  __typename?: 'OptionList';
  count: Scalars['Int']['output'];
  items: Array<Option>;
  pageInfo: PageInfo;
};

export type OptionValue = Node & {
  __typename?: 'OptionValue';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  option: Option;
  updatedAt: Scalars['Date']['output'];
};

export type Order = Node & {
  __typename?: 'Order';
  code: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  customer?: Maybe<Customer>;
  id: Scalars['ID']['output'];
  lines: OrderLineList;
  payment?: Maybe<Payment>;
  /** The date and time when a payment has been added to the order */
  placedAt?: Maybe<Scalars['Date']['output']>;
  shipment?: Maybe<Shipment>;
  shippingAddress?: Maybe<AddressJson>;
  state: OrderState;
  /** Order lines total less discounts */
  subtotal: Scalars['Int']['output'];
  /** The price that will be sent to the payment provider. subtotal plus shipping price */
  total: Scalars['Int']['output'];
  totalQuantity: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
};


export type OrderLinesArgs = {
  input?: InputMaybe<ListInput>;
};

/**  Utils  */
export enum OrderErrorCode {
  CustomerDisabled = 'CUSTOMER_DISABLED',
  CustomerInvalidEmail = 'CUSTOMER_INVALID_EMAIL',
  FailedAddingShippingMethod = 'FAILED_ADDING_SHIPPING_METHOD',
  ForbiddenOrderAction = 'FORBIDDEN_ORDER_ACTION',
  MissingShippingAddress = 'MISSING_SHIPPING_ADDRESS',
  NotEnoughStock = 'NOT_ENOUGH_STOCK',
  OrderTransitionError = 'ORDER_TRANSITION_ERROR',
  PaymentDeclined = 'PAYMENT_DECLINED',
  /** Payment failed due to an unexpected error in the payment handler */
  PaymentFailed = 'PAYMENT_FAILED',
  PaymentMethodNotFound = 'PAYMENT_METHOD_NOT_FOUND',
  ShippingMethodNotFound = 'SHIPPING_METHOD_NOT_FOUND'
}

export type OrderErrorResult = {
  __typename?: 'OrderErrorResult';
  code: OrderErrorCode;
  message: Scalars['String']['output'];
};

export type OrderFilters = {
  code?: InputMaybe<Scalars['String']['input']>;
};

export type OrderLine = Node & {
  __typename?: 'OrderLine';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  linePrice: Scalars['Int']['output'];
  productVariant: Variant;
  quantity: Scalars['Int']['output'];
  unitPrice: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type OrderLineList = List & {
  __typename?: 'OrderLineList';
  count: Scalars['Int']['output'];
  items: Array<OrderLine>;
  pageInfo: PageInfo;
};

export type OrderList = List & {
  __typename?: 'OrderList';
  count: Scalars['Int']['output'];
  items: Array<Order>;
  pageInfo: PageInfo;
};

export type OrderListInput = {
  /** Filters to apply */
  filters?: InputMaybe<OrderFilters>;
  /** Skip the first n results */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** takes n result from where the skip position is */
  take?: InputMaybe<Scalars['Int']['input']>;
};

/**  Results  */
export type OrderResult = {
  __typename?: 'OrderResult';
  apiErrors: Array<OrderErrorResult>;
  order?: Maybe<Order>;
};

export enum OrderState {
  /** The order has been canceled by the admin */
  Canceled = 'CANCELED',
  /** The order has been delivered and is completes */
  Delivered = 'DELIVERED',
  /** The order is being modified by the customer (CRUD line actions, adding contact info and shipment info) */
  Modifying = 'MODIFYING',
  /** The order is ready to be paid */
  PaymentAdded = 'PAYMENT_ADDED',
  /** The payment has been authorized by the payment provider */
  PaymentAuthorized = 'PAYMENT_AUTHORIZED',
  /** The order has been shipped (carrier and tracking code added) */
  Shipped = 'SHIPPED'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  total: Scalars['Int']['output'];
};

export type Payment = Node & {
  __typename?: 'Payment';
  amount: Scalars['Int']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  transactionId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

/** A payment method is a way to pay for an order in your shop, like credit card, paypal, etc */
export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  createdAt: Scalars['Date']['output'];
  /** The payment method's icon */
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The payment method's name (e.g. 'Stripe') */
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export enum PaypalErrorCode {
  PaypalError = 'PAYPAL_ERROR',
  UnknownError = 'UNKNOWN_ERROR'
}

export type PaypalErrorResult = {
  __typename?: 'PaypalErrorResult';
  code?: Maybe<PaypalErrorCode>;
  message?: Maybe<Scalars['String']['output']>;
};

export type PaypalResult = {
  __typename?: 'PaypalResult';
  apiErrors: Array<PaypalErrorResult>;
  orderId?: Maybe<Scalars['String']['output']>;
};

export type Product = Node & {
  __typename?: 'Product';
  /**
   * Whether the product is archived or not.
   * Archived products are not exposed to the storefront API and are not visible in the admin ui by default.
   * Useful for products that are not available anymore but you don't want to lose their data.
   */
  archived: Scalars['Boolean']['output'];
  assets: AssetList;
  createdAt: Scalars['Date']['output'];
  /** The product's description */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * Whether the products is enabled or not.
   * Not enabled products are not exposed to the storefront API but are visible in the admin ui.
   * Useful for products that are not published by now but they planned to be published in the future.
   */
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The product's name */
  name: Scalars['String']['output'];
  options: Array<Option>;
  /** A human-friendly unique string for the Product automatically generated from its name */
  slug: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  variants: VariantList;
};


export type ProductAssetsArgs = {
  input?: InputMaybe<ListInput>;
};


export type ProductVariantsArgs = {
  input?: InputMaybe<ListInput>;
};

export type ProductFilters = {
  name?: InputMaybe<StringFilter>;
};

export type ProductList = List & {
  __typename?: 'ProductList';
  count: Scalars['Int']['output'];
  items: Array<Product>;
  pageInfo: PageInfo;
};

export type ProductListInput = {
  /** Filters to apply */
  filters?: InputMaybe<ProductFilters>;
  /** Skip the first n results */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** takes n result from where the skip position is */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  availablePaymentMethods: Array<PaymentMethod>;
  availableShippingMethods: Array<ShippingMethod>;
  collection?: Maybe<Collection>;
  collections: CollectionList;
  countries: Array<Country>;
  /** Get authenticated customer */
  me?: Maybe<Customer>;
  order?: Maybe<Order>;
  product?: Maybe<Product>;
  products: ProductList;
};


export type QueryAvailableShippingMethodsArgs = {
  orderId: Scalars['ID']['input'];
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  input?: InputMaybe<ListInput>;
};


export type QueryOrderArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  input?: InputMaybe<ProductListInput>;
};

export type Shipment = Node & {
  __typename?: 'Shipment';
  amount: Scalars['Int']['output'];
  carrier?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  order: Order;
  trackingCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

/** A shipping method is a method chosen by the customer to ship the order to the customer's address */
export type ShippingMethod = Node & {
  __typename?: 'ShippingMethod';
  createdAt: Scalars['Date']['output'];
  /** The shipping method's description */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * Whether the shipping method is enabled or not
   * Not enabled shipping methods will not be shown in the storefront
   * Useful for shipping methods that are not ready to be used yet
   */
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The shipping method's name (e.g. 'Stripe') */
  name: Scalars['String']['output'];
  pricePreview: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type State = Node & {
  __typename?: 'State';
  country: Country;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  references?: InputMaybe<Scalars['String']['input']>;
  streetLine1?: InputMaybe<Scalars['String']['input']>;
  streetLine2?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerPasswordInput = {
  confirmPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type UpdateOrderLineInput = {
  quantity: Scalars['Int']['input'];
};

/**
 * A variant is a specific version of a product.
 * For example, a product can have a variant with a specific color, size, or material.
 */
export type Variant = Node & {
  __typename?: 'Variant';
  asset?: Maybe<Asset>;
  /**
   * The variant's comparison price.
   * Useful when you want to mark a variant as on sale. Comparison price should be higher than the sale price.
   */
  comparisonPrice?: Maybe<Scalars['Int']['output']>;
  /**
   * The variant's cost per unit.
   * Useful when you want to calculate the profit of a variant.
   */
  costPerUnit?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  optionValues: Array<OptionValue>;
  product: Product;
  /**
   * The variant's weight
   * Useful when you want to indicate that the variant needs shipping.
   */
  requiresShipping: Scalars['Boolean']['output'];
  /** The variant's sale price */
  salePrice: Scalars['Int']['output'];
  /** The variant's SKU */
  sku?: Maybe<Scalars['String']['output']>;
  /** The variant's stock */
  stock: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type VariantList = List & {
  __typename?: 'VariantList';
  count: Scalars['Int']['output'];
  items: Array<Variant>;
  pageInfo: PageInfo;
};

export type SynchronizeProductsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SynchronizeProductsQueryQuery = { __typename?: 'Query', products: { __typename?: 'ProductList', items: Array<{ __typename?: 'Product', id: string, name: string, slug: string, enabled: boolean, description?: string | null, assets: { __typename?: 'AssetList', items: Array<{ __typename?: 'Asset', id: string, source: string }> }, options: Array<{ __typename?: 'Option', id: string, name: string, values: Array<{ __typename?: 'OptionValue', id: string, name: string }> }>, variants: { __typename?: 'VariantList', items: Array<{ __typename?: 'Variant', salePrice: number, stock: number, optionValues: Array<{ __typename?: 'OptionValue', id: string, name: string }> }> } }> } };

export type CheckQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckQuery = { __typename?: 'Query', products: { __typename?: 'ProductList', count: number } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const SynchronizeProductsQueryDocument = new TypedDocumentString(`
    query SynchronizeProductsQuery {
  products {
    items {
      id
      name
      slug
      enabled
      description
      assets(input: {take: 1}) {
        items {
          id
          source
        }
      }
      options {
        id
        name
        values {
          id
          name
        }
      }
      variants {
        items {
          salePrice
          stock
          optionValues {
            id
            name
          }
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<SynchronizeProductsQueryQuery, SynchronizeProductsQueryQueryVariables>;
export const CheckDocument = new TypedDocumentString(`
    query Check {
  products {
    count
  }
}
    `) as unknown as TypedDocumentString<CheckQuery, CheckQueryVariables>;