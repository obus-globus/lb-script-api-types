import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SelectArbiter } from '../../../../../../../org/apache/logging/log4j/core/config/arbiters/SelectArbiter.d.ts'
import type { Builder } from '../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class SelectArbiter$Builder extends Object implements Builder<SelectArbiter> {
    constructor()
    asBuilder(): SelectArbiter$Builder;
    build(): SelectArbiter;
    getErrorPrefix(): string;
    isValid(): boolean;
}