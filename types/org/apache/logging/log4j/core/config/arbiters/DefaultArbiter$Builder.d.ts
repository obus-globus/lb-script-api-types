import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultArbiter } from '../../../../../../../org/apache/logging/log4j/core/config/arbiters/DefaultArbiter.d.ts'
import type { Builder } from '../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class DefaultArbiter$Builder extends Object implements Builder<DefaultArbiter> {
    constructor()
    asBuilder(): DefaultArbiter$Builder;
    build(): DefaultArbiter;
    getErrorPrefix(): string;
    isValid(): boolean;
}