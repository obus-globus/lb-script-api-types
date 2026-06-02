import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ObjectInputFilter$FilterInfo extends Object{
    arrayLength(): number;
    depth(): number;
    references(): number;
    serialClass(): Class<Object>;
    streamBytes(): number;
}