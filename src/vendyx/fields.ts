import { EditableManagedCollectionField } from 'framer-plugin';

export const FieldsIds = {
  NameId: '88d4a9d0-2e09-408a-9c40-9dfe41037eca',
  ImageId: '145eb74f-181e-47eb-9e90-374b1dff2935',
  EnabledId: 'aae2dde3-cb3f-4a5c-889d-fd927e2118d0',
  DescriptionId: '45a8afdf-cb0e-43ab-89ac-75247e545315',
  OptionsId: '805ff291-a53a-43aa-965a-64251d28a3dc',
  variantsId: 'e4b9f461-87b3-456c-90d8-6d575f38967b'
};

export const getInitialFields = (): EditableManagedCollectionField[] => [
  {
    id: FieldsIds.ImageId,
    name: 'Image',
    type: 'image'
  },
  {
    id: FieldsIds.NameId,
    name: 'Name',
    type: 'string'
  },
  {
    id: FieldsIds.EnabledId,
    name: 'Enabled',
    type: 'boolean'
  },
  {
    id: FieldsIds.DescriptionId,
    name: 'Description',
    type: 'formattedText'
  },
  {
    id: FieldsIds.OptionsId,
    name: 'Options',
    type: 'string'
  },
  {
    id: FieldsIds.variantsId,
    name: 'Variants',
    type: 'string'
  }
];
