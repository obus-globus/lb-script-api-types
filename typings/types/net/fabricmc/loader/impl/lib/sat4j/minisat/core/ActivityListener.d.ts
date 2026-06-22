import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { VarActivityListener } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/VarActivityListener.d.ts'
export interface ActivityListener extends Object, VarActivityListener{
    varBumpActivity(arg0: number): void;
}