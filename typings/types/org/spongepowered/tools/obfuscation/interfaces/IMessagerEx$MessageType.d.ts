import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Diagnostic$Kind } from '../../../../../javax/tools/Diagnostic$Kind.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { IMixinAnnotationProcessor$CompilerEnvironment } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IMixinAnnotationProcessor$CompilerEnvironment.d.ts'
import type { IOptionProvider } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/IOptionProvider.d.ts'
export class IMessagerEx$MessageType extends Enum<IMessagerEx$MessageType> {
    static ACCESSOR_ATTACH_ERROR: IMessagerEx$MessageType;
    static ACCESSOR_MAPPING_CONFLICT: IMessagerEx$MessageType;
    static ACCESSOR_NAME_UNRESOLVED: IMessagerEx$MessageType;
    static ACCESSOR_ON_NON_METHOD_ELEMENT: IMessagerEx$MessageType;
    static ACCESSOR_ON_NON_MIXIN_METHOD: IMessagerEx$MessageType;
    static ACCESSOR_TARGET_NOT_FOUND: IMessagerEx$MessageType;
    static ACCESSOR_TYPE_UNSUPPORTED: IMessagerEx$MessageType;
    static BARE_REFERENCE: IMessagerEx$MessageType;
    static CONSTRAINT_VIOLATION: IMessagerEx$MessageType;
    static ERROR: IMessagerEx$MessageType;
    static FACTORY_INVOKER_GENERIC_ARGS: IMessagerEx$MessageType;
    static FACTORY_INVOKER_NONSTATIC: IMessagerEx$MessageType;
    static FACTORY_INVOKER_RETURN_TYPE: IMessagerEx$MessageType;
    static INFO: IMessagerEx$MessageType;
    static INJECTOR_IN_INTERFACE: IMessagerEx$MessageType;
    static INJECTOR_MAPPING_CONFLICT: IMessagerEx$MessageType;
    static INJECTOR_ON_NON_METHOD_ELEMENT: IMessagerEx$MessageType;
    static INJECTOR_ON_NON_MIXIN_METHOD: IMessagerEx$MessageType;
    static INJECTOR_TARGET_NOT_FULLY_QUALIFIED: IMessagerEx$MessageType;
    static INVALID_CONSTRAINT: IMessagerEx$MessageType;
    static INVOKER_RAW_RETURN_TYPE: IMessagerEx$MessageType;
    static METHOD_VISIBILITY: IMessagerEx$MessageType;
    static MISSING_INJECTOR_DESC_MULTITARGET: IMessagerEx$MessageType;
    static MISSING_INJECTOR_DESC_SIMULATED: IMessagerEx$MessageType;
    static MISSING_INJECTOR_DESC_SINGLETARGET: IMessagerEx$MessageType;
    static MIXIN_NO_TARGETS: IMessagerEx$MessageType;
    static MIXIN_ON_INVALID_TYPE: IMessagerEx$MessageType;
    static MIXIN_SOFT_TARGET_IS_PUBLIC: IMessagerEx$MessageType;
    static MIXIN_SOFT_TARGET_NOT_FOUND: IMessagerEx$MessageType;
    static MIXIN_SOFT_TARGET_NOT_RESOLVED: IMessagerEx$MessageType;
    static NOTE: IMessagerEx$MessageType;
    static NO_OBFDATA_FOR_ACCESSOR: IMessagerEx$MessageType;
    static NO_OBFDATA_FOR_CLASS: IMessagerEx$MessageType;
    static NO_OBFDATA_FOR_CTOR: IMessagerEx$MessageType;
    static NO_OBFDATA_FOR_FIELD: IMessagerEx$MessageType;
    static NO_OBFDATA_FOR_METHOD: IMessagerEx$MessageType;
    static NO_OBFDATA_FOR_OVERWRITE: IMessagerEx$MessageType;
    static NO_OBFDATA_FOR_SHADOW: IMessagerEx$MessageType;
    static NO_OBFDATA_FOR_SIMULATED_SHADOW: IMessagerEx$MessageType;
    static NO_OBFDATA_FOR_SOFT_IMPLEMENTS: IMessagerEx$MessageType;
    static NO_OBFDATA_FOR_STATIC_OVERWRITE: IMessagerEx$MessageType;
    static NO_OBFDATA_FOR_TARGET: IMessagerEx$MessageType;
    static OVERWRITE_DOCS: IMessagerEx$MessageType;
    static OVERWRITE_MAPPING_CONFLICT: IMessagerEx$MessageType;
    static OVERWRITE_ON_NON_METHOD_ELEMENT: IMessagerEx$MessageType;
    static OVERWRITE_ON_NON_MIXIN_METHOD: IMessagerEx$MessageType;
    static PARENT_VALIDATOR: IMessagerEx$MessageType;
    static SHADOW_MAPPING_CONFLICT: IMessagerEx$MessageType;
    static SHADOW_ON_INVALID_ELEMENT: IMessagerEx$MessageType;
    static SHADOW_ON_NON_MIXIN_ELEMENT: IMessagerEx$MessageType;
    static SOFT_IMPLEMENTS_EMPTY: IMessagerEx$MessageType;
    static SOFT_IMPLEMENTS_ON_INVALID_TYPE: IMessagerEx$MessageType;
    static SOFT_IMPLEMENTS_ON_NON_MIXIN: IMessagerEx$MessageType;
    static TARGET_ELEMENT_NOT_FOUND: IMessagerEx$MessageType;
    static TARGET_SELECTOR_VALIDATION: IMessagerEx$MessageType;
    static TARGET_VALIDATOR: IMessagerEx$MessageType;
    static WARNING: IMessagerEx$MessageType;
    static applyOptions(paramarg0: IMixinAnnotationProcessor$CompilerEnvironment, paramarg1: IOptionProvider): void;
    static getSupportedOptions(): string[];
    static setDecoration(paramarg0: boolean): void;
    static setPrefix(paramarg0: string): void;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): IMessagerEx$MessageType;
    static values(): IMessagerEx$MessageType[];
    private constructor(arg2: Diagnostic$Kind)
    readonly enabled: boolean;
    readonly kind: Diagnostic$Kind;
    // private originalKind: Diagnostic$Kind;
    // private setByUser: boolean;
    decorate(arg0: CharSequence): CharSequence;
    getKind(): Diagnostic$Kind;
    isEnabled(): boolean;
    isError(): boolean;
    quench(arg0: Diagnostic$Kind): void;
    reset(): void;
    setEnabled(arg0: boolean): void;
    setKind(arg0: Diagnostic$Kind): void;
    name(): "INFO" | "NOTE" | "ERROR" | "WARNING" | "MIXIN_ON_INVALID_TYPE" | "MIXIN_SOFT_TARGET_NOT_FOUND" | "MIXIN_SOFT_TARGET_NOT_RESOLVED" | "MIXIN_SOFT_TARGET_IS_PUBLIC" | "MIXIN_NO_TARGETS" | "PARENT_VALIDATOR" | "TARGET_VALIDATOR" | "ACCESSOR_ATTACH_ERROR" | "ACCESSOR_TARGET_NOT_FOUND" | "ACCESSOR_TYPE_UNSUPPORTED" | "ACCESSOR_NAME_UNRESOLVED" | "INVOKER_RAW_RETURN_TYPE" | "FACTORY_INVOKER_GENERIC_ARGS" | "FACTORY_INVOKER_RETURN_TYPE" | "FACTORY_INVOKER_NONSTATIC" | "CONSTRAINT_VIOLATION" | "INVALID_CONSTRAINT" | "ACCESSOR_MAPPING_CONFLICT" | "INJECTOR_MAPPING_CONFLICT" | "OVERWRITE_MAPPING_CONFLICT" | "SHADOW_MAPPING_CONFLICT" | "INJECTOR_IN_INTERFACE" | "INJECTOR_ON_NON_METHOD_ELEMENT" | "OVERWRITE_ON_NON_METHOD_ELEMENT" | "ACCESSOR_ON_NON_METHOD_ELEMENT" | "SHADOW_ON_INVALID_ELEMENT" | "INJECTOR_ON_NON_MIXIN_METHOD" | "OVERWRITE_ON_NON_MIXIN_METHOD" | "ACCESSOR_ON_NON_MIXIN_METHOD" | "SHADOW_ON_NON_MIXIN_ELEMENT" | "SOFT_IMPLEMENTS_ON_INVALID_TYPE" | "SOFT_IMPLEMENTS_ON_NON_MIXIN" | "SOFT_IMPLEMENTS_EMPTY" | "TARGET_SELECTOR_VALIDATION" | "INJECTOR_TARGET_NOT_FULLY_QUALIFIED" | "MISSING_INJECTOR_DESC_MULTITARGET" | "MISSING_INJECTOR_DESC_SINGLETARGET" | "MISSING_INJECTOR_DESC_SIMULATED" | "TARGET_ELEMENT_NOT_FOUND" | "METHOD_VISIBILITY" | "NO_OBFDATA_FOR_ACCESSOR" | "NO_OBFDATA_FOR_CLASS" | "NO_OBFDATA_FOR_TARGET" | "NO_OBFDATA_FOR_CTOR" | "NO_OBFDATA_FOR_OVERWRITE" | "NO_OBFDATA_FOR_STATIC_OVERWRITE" | "NO_OBFDATA_FOR_FIELD" | "NO_OBFDATA_FOR_METHOD" | "NO_OBFDATA_FOR_SHADOW" | "NO_OBFDATA_FOR_SIMULATED_SHADOW" | "NO_OBFDATA_FOR_SOFT_IMPLEMENTS" | "BARE_REFERENCE" | "OVERWRITE_DOCS";
}