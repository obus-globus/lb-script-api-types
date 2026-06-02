import type { DataFlavor } from '../../../java/awt/datatransfer/DataFlavor.d.ts'
import type { FlavorMap } from '../../../java/awt/datatransfer/FlavorMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface FlavorTable extends FlavorMap, Object{
    getFlavorsForNative(arg0: string): DataFlavor[];
    getNativesForFlavor(arg0: DataFlavor): string[];
}