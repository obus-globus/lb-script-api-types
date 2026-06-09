import type { MemberScope } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { AbstractStubType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/AbstractStubType.d.ts'
import type { AbstractStubType$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/AbstractStubType$Companion.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { NewTypeVariableConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/NewTypeVariableConstructor.d.ts'
import type { StubTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/StubTypeMarker.d.ts'
export class StubTypeForBuilderInference extends AbstractStubType implements StubTypeMarker {
    static Companion: AbstractStubType$Companion;
    constructor(arg0: NewTypeVariableConstructor, arg1: boolean, arg2: TypeConstructor)
    // inaccessible (TS-reserved member name): readonly constructor: TypeConstructor;
    readonly memberScope: MemberScope;
    getConstructor(): TypeConstructor;
    getMemberScope(): MemberScope;
    materialize(arg0: boolean): AbstractStubType;
    toString(): string;
}