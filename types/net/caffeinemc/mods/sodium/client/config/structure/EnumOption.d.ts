import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { StorageEventHandler } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/StorageEventHandler.d.ts'
import type { OptionBinding } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionBinding.d.ts'
import type { OptionImpact } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionImpact.d.ts'
import type { StatefulOption } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/StatefulOption.d.ts'
import type { DependentValue } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/value/DependentValue.d.ts'
import type { Control } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/Control.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class EnumOption<E extends Enum<E>> extends StatefulOption<E> {
    constructor(arg0: Identifier, arg1: E[], arg2: Component, arg3: DependentValue<boolean>, arg4: () => void, arg5: (param0: E) => Component, arg6: OptionImpact, arg7: Identifier[], arg8: DependentValue<E>, arg9: boolean, arg10: OptionBinding<E>, arg11: (param0: ConfigState) => void, arg12: Class<E>, arg13: DependentValue<E[]>, arg14: (param0: E) => Component)
    readonly allowedValues: DependentValue<E[]>;
    readonly elementNameProvider: (param0: E) => Component;
    readonly enumClass: Class<E>;
    createControl(): Control;
    getAllowedValues(): DependentValue<E[]>;
    getElementName(arg0: E): Component;
    getElementNameProvider(): (param0: E) => Component;
    getEnumClass(): Class<E>;
    isValueAllowed(arg0: E): boolean;
    validateValue(arg0: E): E;
    visitDependentValues(arg0: (param0: DependentValue<Object>) => void): void;
}