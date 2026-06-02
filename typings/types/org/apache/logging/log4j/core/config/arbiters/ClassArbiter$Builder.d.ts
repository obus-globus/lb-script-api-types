import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassArbiter } from '../../../../../../../org/apache/logging/log4j/core/config/arbiters/ClassArbiter.d.ts'
import type { Builder } from '../../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class ClassArbiter$Builder extends Object implements Builder<ClassArbiter> {
    static ATTR_CLASS_NAME: string;
    constructor()
    // private className: string;
    asBuilder(): ClassArbiter$Builder;
    build(): ClassArbiter;
    getErrorPrefix(): string;
    isValid(): boolean;
    setClassName(className: string): ClassArbiter$Builder;
}