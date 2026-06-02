import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { Reader } from '../../java/io/Reader.d.ts'
import type { DocFlavor } from '../../javax/print/DocFlavor.d.ts'
import type { DocAttributeSet } from '../../javax/print/attribute/DocAttributeSet.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Doc extends Object{
    getAttributes(): DocAttributeSet;
    getDocFlavor(): DocFlavor;
    getPrintData(): Object;
    getReaderForText(): Reader;
    getStreamForBytes(): InputStream;
}