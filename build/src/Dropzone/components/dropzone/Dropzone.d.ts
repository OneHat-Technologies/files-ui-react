import * as React from "react";
import { DropzoneProps } from "./DropzoneProps";
import "./Dropzone.scss";
import "./DropzoneRipple.scss";
declare let DropzoneUploadFiles: (() => Promise<void>) | null;
/**
 *
 * Demos:
 *
 * - [Dropzone](https://www.files-ui.com/components/dropzone)
 *
 * API:
 *
 * - [Dropzone API](https://www.files-ui.com/api/dropzone/)
 */
declare const Dropzone: React.FC<DropzoneProps>;
export default Dropzone;
export { DropzoneUploadFiles };
