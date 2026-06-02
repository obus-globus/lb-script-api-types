import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Constr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
export interface Learner extends Object{
    learn(arg0: Constr): void;
}