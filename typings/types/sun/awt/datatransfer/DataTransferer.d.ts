import type { Image } from '../../../java/awt/Image.d.ts'
import type { DataFlavor } from '../../../java/awt/datatransfer/DataFlavor.d.ts'
import type { FlavorMap } from '../../../java/awt/datatransfer/FlavorMap.d.ts'
import type { FlavorTable } from '../../../java/awt/datatransfer/FlavorTable.d.ts'
import type { Transferable } from '../../../java/awt/datatransfer/Transferable.d.ts'
import type { RenderedImage } from '../../../java/awt/image/RenderedImage.d.ts'
import type { ByteArrayOutputStream } from '../../../java/io/ByteArrayOutputStream.d.ts'
import type { File } from '../../../java/io/File.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ToolkitThreadBlockedHandler } from '../../../sun/awt/datatransfer/ToolkitThreadBlockedHandler.d.ts'
export abstract class DataTransferer extends Object {
    static javaTextEncodingFlavor: DataFlavor;
    static adaptFlavorMap(paramarg0: FlavorMap): FlavorTable;
    static getInstance(): DataTransferer;
    static keysToLongArray(paramarg0: { [key: number]: Object }): number[];
    static setToSortedDataFlavorArray(paramarg0: DataFlavor[]): (Object | null)[];
    constructor()
    // private castToFile(arg0: Object): File;
    // private castToFiles(arg0: (Object | null)[]): string[];
    // private concatData(arg0: Object, arg1: Object): Object;
    // private constructFlavoredObject(arg0: Object, arg1: DataFlavor, arg2: Class<Object>): Object;
    convertData(arg0: Object, arg1: Transferable, arg2: number, arg3: { [key: number]: DataFlavor }, arg4: boolean): number[];
    convertFileListToBytes(arg0: string[]): ByteArrayOutputStream;
    dragQueryFile(arg0: number[]): string[];
    dragQueryURIs(arg0: InputStream, arg1: number, arg2: Transferable): URI[];
    getBestCharsetForTextFormat(arg0: number, arg1: Transferable): string;
    getCharsetForTextFormat(arg0: number): string;
    getDefaultUnicodeEncoding(): string;
    getFlavorsForFormats(arg0: number[], arg1: FlavorTable): Map<DataFlavor, number>;
    getFlavorsForFormatsAsArray(arg0: number[], arg1: FlavorTable): DataFlavor[];
    getFlavorsForFormatsAsSet(arg0: number[], arg1: FlavorTable): DataFlavor[];
    getFormatForNativeAsLong(arg0: string): number;
    getFormatsForFlavors(arg0: DataFlavor[], arg1: FlavorTable): { [key: number]: DataFlavor };
    getFormatsForTransferable(arg0: Transferable, arg1: FlavorTable): { [key: number]: DataFlavor };
    getFormatsForTransferableAsArray(arg0: Transferable, arg1: FlavorTable): number[];
    getNativeForFormat(arg0: number): string;
    getPlatformMappingsForFlavor(arg0: DataFlavor): string[];
    getPlatformMappingsForNative(arg0: string): DataFlavor[];
    getToolkitThreadBlockedHandler(): ToolkitThreadBlockedHandler;
    imageToPlatformBytes(arg0: Image, arg1: number): number[];
    imageToStandardBytes(arg0: Image, arg1: string): number[];
    imageToStandardBytesImpl(arg0: RenderedImage, arg1: string): number[];
    isFileFormat(arg0: number): boolean;
    isImageFormat(arg0: number): boolean;
    isLocaleDependentTextFormat(arg0: number): boolean;
    isTextFormat(arg0: number): boolean;
    isURIListFormat(arg0: number): boolean;
    platformImageBytesToImage(arg0: number[], arg1: number): Image;
    processDataConversionRequests(): void;
    registerTextFlavorProperties(arg0: string, arg1: string, arg2: string, arg3: string): void;
    standardImageBytesToImage(arg0: number[], arg1: string): Image;
    translateBytes(arg0: number[], arg1: DataFlavor, arg2: number, arg3: Transferable): Object;
    // private translateBytesToString(arg0: number[], arg1: number, arg2: Transferable): string;
    translateStream(arg0: InputStream, arg1: DataFlavor, arg2: number, arg3: Transferable): Object;
    // private translateStreamToInputStream(arg0: InputStream, arg1: DataFlavor, arg2: number, arg3: Transferable): Object;
    translateTransferable(arg0: Transferable, arg1: DataFlavor, arg2: number): number[];
    // private translateTransferableString(arg0: string, arg1: number): number[];
}