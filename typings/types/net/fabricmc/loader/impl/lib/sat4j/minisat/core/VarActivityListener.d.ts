import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface VarActivityListener extends Serializable, Object{
    varBumpActivity(arg0: number): void;
}