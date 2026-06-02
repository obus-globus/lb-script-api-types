import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface RegionFileVersion$StreamWrapper<O extends Object | number | string | boolean> extends Object{
    wrap(stream: O): O;
}