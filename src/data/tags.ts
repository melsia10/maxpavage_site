export type TagSlug =
  | 'amenagements-exterieurs-1'
  | 'terrassements-2'
  | 'maconneries-3'
  | 'tapis-de-pierre-6';

export const TAGS: Record<TagSlug, string> = {
  'amenagements-exterieurs-1': 'Aménagements extérieurs',
  'terrassements-2': 'Terrassements',
  'maconneries-3': 'Maçonneries',
  'tapis-de-pierre-6': 'Tapis de pierre',
};
