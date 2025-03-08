import { ManagedCollectionItemInput } from 'framer-plugin';
import { FieldsIds } from './fields';

export const buildCollectionItems = (item: any): ManagedCollectionItemInput => ({
  id: item.id,
  slug: item.slug,
  fieldData: {
    [FieldsIds.NameId]: { type: 'string', value: item.name },
    [FieldsIds.ImageId]: { type: 'image', value: item.assets.items[0]?.source ?? null },
    [FieldsIds.EnabledId]: { type: 'boolean', value: item.enabled },
    [FieldsIds.DescriptionId]: { type: 'formattedText', value: item.description }
  }
});
