import { ValidateFileResponse } from "@files-ui/core";
export declare const useDropzoneValidation: (accept: string | undefined, maxFileSize: number | undefined, maxFiles: number | undefined, validator: ((f: File) => ValidateFileResponse) | undefined) => boolean;
