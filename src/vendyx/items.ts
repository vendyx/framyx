import { ManagedCollectionItemInput } from 'framer-plugin';
import { FieldsIds } from './fields';
import { SynchronizeProductsQueryQuery } from './types';

type Item = SynchronizeProductsQueryQuery['products']['items'][0];

export const buildCollectionItems = (item: Item): ManagedCollectionItemInput => ({
  id: item.id,
  slug: item.slug,
  fieldData: {
    [FieldsIds.NameId]: { type: 'string', value: item.name },
    [FieldsIds.ImageId]: { type: 'image', value: item.assets.items[0]?.source ?? null },
    [FieldsIds.EnabledId]: { type: 'boolean', value: item.enabled },
    [FieldsIds.DescriptionId]: { type: 'formattedText', value: item.description ?? '' },
    [FieldsIds.OptionsId]: { type: 'string', value: JSON.stringify(item.options) },
    [FieldsIds.variantsId]: { type: 'string', value: JSON.stringify(item.variants.items) }
  }
});
