import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PropertyReference0 } from '../../../kotlin/jvm/internal/PropertyReference0.d.ts'
import type { KDeclarationContainer } from '../../../kotlin/reflect/KDeclarationContainer.d.ts'
export class LocalVariableReference extends PropertyReference0 implements Serializable {
    static NO_RECEIVER: Object;
    constructor()
    get(): Object | null;
    getOwner(): KDeclarationContainer;
}