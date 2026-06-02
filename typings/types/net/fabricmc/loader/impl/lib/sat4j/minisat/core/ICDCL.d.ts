import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ActivityListener } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/ActivityListener.d.ts'
import type { Learner } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/minisat/core/Learner.d.ts'
import type { ISolver } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/ISolver.d.ts'
import type { UnitPropagationListener } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/UnitPropagationListener.d.ts'
export interface ICDCL extends Object, ActivityListener, Learner, ISolver, UnitPropagationListener{
}