import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KmExtensionType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmExtensionType.d.ts'
import type { KmFunctionExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmFunctionExtension.d.ts'
import type { JvmMethodSignature } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/JvmMethodSignature.d.ts'
import type { JvmFunctionExtension$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/internal/JvmFunctionExtension$Companion.d.ts'
export class JvmFunctionExtension extends Object implements KmFunctionExtension {
    static Companion: JvmFunctionExtension$Companion;
    static TYPE: KmExtensionType;
    constructor()
    readonly lambdaClassOriginName: string;
    readonly signature: JvmMethodSignature;
    getLambdaClassOriginName(): string;
    getSignature(): JvmMethodSignature;
    getType(): KmExtensionType;
    setLambdaClassOriginName(arg0: string): void;
    setSignature(arg0: JvmMethodSignature): void;
}