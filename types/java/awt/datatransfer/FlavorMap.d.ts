import type { DataFlavor } from '../../../java/awt/datatransfer/DataFlavor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface FlavorMap extends Object{
    getFlavorsForNatives(arg0: string[]): { [key: string]: DataFlavor };
    getNativesForFlavors(arg0: DataFlavor[]): Map<DataFlavor, string>;
}