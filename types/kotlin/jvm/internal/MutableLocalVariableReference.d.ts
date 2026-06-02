import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MutablePropertyReference0 } from '../../../kotlin/jvm/internal/MutablePropertyReference0.d.ts'
import type { KDeclarationContainer } from '../../../kotlin/reflect/KDeclarationContainer.d.ts'
export class MutableLocalVariableReference extends MutablePropertyReference0 implements Serializable {
    static NO_RECEIVER: Object;
    constructor()
    get(): Object | null;
    getOwner(): KDeclarationContainer;
    set(value: Object | null): void;
}