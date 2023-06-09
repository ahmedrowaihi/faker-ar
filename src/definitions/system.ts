import type { LocaleEntry } from './definitions';

/**
 * The possible definitions related to files and operating systems.
 */
export type SystemDefinitions = LocaleEntry<{
  /**
   * Returns some common file paths.
   */
  directoryPaths: string[];

  /**
   * The mime type definitions with some additional information.
   */
  mimeTypes: { [mimeType: string]: SystemMimeTypeEntryDefinitions };
}>;

/**
 * The mime-type entry details.
 */
export interface SystemMimeTypeEntryDefinitions {
  extensions: string[];
}
