import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CustomValue } from '../../../../../net/fabricmc/loader/api/metadata/CustomValue.d.ts'
import type { ModDependency } from '../../../../../net/fabricmc/loader/api/metadata/ModDependency.d.ts'
import type { ModMetadata } from '../../../../../net/fabricmc/loader/api/metadata/ModMetadata.d.ts'
export abstract class AbstractModMetadata extends Object implements ModMetadata {
    static TYPE_BUILTIN: string;
    static TYPE_FABRIC_MOD: string;
    constructor()
    containsCustomElement(arg0: string): boolean;
    containsCustomValue(arg0: string): boolean;
    getBreaks(): ModDependency[];
    getConflicts(): ModDependency[];
    getCustomValue(arg0: string): CustomValue;
    getDepends(): ModDependency[];
    getRecommends(): ModDependency[];
    getSuggests(): ModDependency[];
}