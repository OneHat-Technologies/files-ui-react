import * as React from "react";
import { ValidateFileResponse, ExtFile, Localization } from "@files-ui/core";
/**
 * Effect for keeping track of changes
 * update files when value changes
 * also updates the number of valid files
 * When `isUploading` is true, it only updates when value and arrOfExtFiles
 * have same lenght. Also, only updates the uploadStatus attribute
 * from "preparing", to undefined when onCancel() method is called in
 * FileItem component
 * @param dropzoneId the asociated dropzoneId for the corresponding array of ExtFiles in case of multiple dropzones
 * @param value the current value of the list of Files from props
 * @param isUploading
 * @returns the local list of Files
 */
export declare const useDropzoneFileListUpdater: (dropzoneId: number | string | undefined, value: ExtFile[], isUploading: boolean, maxFileSize?: number, accept?: string, maxFiles?: number, validator?: ((f: File) => ValidateFileResponse) | undefined, localization?: Localization, validateFilesFlag?: boolean) => [ExtFile[], number, React.Dispatch<React.SetStateAction<ExtFile[]>>];
