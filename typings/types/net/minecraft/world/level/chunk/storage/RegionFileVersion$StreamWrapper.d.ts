import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface RegionFileVersion$StreamWrapper<O extends unknown> extends Object{
    wrap(stream: O): O;
}