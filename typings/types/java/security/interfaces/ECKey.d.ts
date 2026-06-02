import type { ECParameterSpec } from '../../../java/security/spec/ECParameterSpec.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ECKey extends Object{
    getParams(): ECParameterSpec;
}