import { ExtFile } from "@files-ui/core";
import { FileMosaicPropsMap } from "../FileMosaic/components/file-mosaic/FileMosaicProps";
export interface FileCardPropsMap extends FileMosaicPropsMap {
    elevation?: false | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24";
}
export type FileCardProps = ExtFile & {
    [F in keyof FileCardPropsMap]: FileCardPropsMap[F];
};
/**
 * Base default props
 */
export declare const FileCardPropsDefault: FileCardProps;
