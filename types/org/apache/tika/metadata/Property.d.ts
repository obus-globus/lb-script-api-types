import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Property$PropertyType } from '../../../../org/apache/tika/metadata/Property$PropertyType.d.ts'
import type { Property$ValueType } from '../../../../org/apache/tika/metadata/Property$ValueType.d.ts'
export class Property extends Object implements Comparable<Property> {
    static composite(paramarg0: Property, paramarg1: (Object | null)[]): Property;
    static externalBoolean(paramarg0: string): Property;
    static externalBooleanSeq(paramarg0: string): Property;
    static externalClosedChoise(paramarg0: string, paramarg1: (Object | null)[]): Property;
    static externalDate(paramarg0: string): Property;
    static externalInteger(paramarg0: string): Property;
    static externalOpenChoise(paramarg0: string, paramarg1: (Object | null)[]): Property;
    static externalReal(paramarg0: string): Property;
    static externalRealSeq(paramarg0: string): Property;
    static externalText(paramarg0: string): Property;
    static externalTextBag(paramarg0: string): Property;
    static get(paramarg0: string): Property;
    static getProperties(paramarg0: string): Property[];
    static getPropertyType(paramarg0: string): Property$PropertyType;
    static internalBoolean(paramarg0: string): Property;
    static internalClosedChoise(paramarg0: string, paramarg1: (Object | null)[]): Property;
    static internalDate(paramarg0: string): Property;
    static internalDateBag(paramarg0: string): Property;
    static internalInteger(paramarg0: string): Property;
    static internalIntegerSequence(paramarg0: string): Property;
    static internalOpenChoise(paramarg0: string, paramarg1: (Object | null)[]): Property;
    static internalRational(paramarg0: string): Property;
    static internalReal(paramarg0: string): Property;
    static internalText(paramarg0: string): Property;
    static internalTextBag(paramarg0: string): Property;
    static internalURI(paramarg0: string): Property;
    private constructor(arg0: string, arg1: boolean, arg2: Property$PropertyType, arg3: Property$ValueType)
    private constructor(arg0: string, arg1: boolean, arg2: Property$PropertyType, arg3: Property$ValueType, arg4: string[])
    private constructor(arg0: string, arg1: boolean, arg2: Property$PropertyType, arg3: Property$ValueType, arg4: string[], arg5: Property, arg6: Property[])
    private constructor(arg0: string, arg1: boolean, arg2: Property$ValueType)
    private constructor(arg0: string, arg1: boolean, arg2: Property$ValueType, arg3: string[])
    readonly choices: string[];
    readonly internal: boolean;
    readonly name: string;
    readonly primaryProperty: Property;
    readonly propertyType: Property$PropertyType;
    readonly secondaryExtractProperties: Property[];
    readonly valueType: Property$ValueType;
    compareTo(arg0: Property): number;
    equals(arg0: Object | null): boolean;
    getChoices(): string[];
    getName(): string;
    getPrimaryProperty(): Property;
    getPropertyType(): Property$PropertyType;
    getSecondaryExtractProperties(): Property[];
    getValueType(): Property$ValueType;
    hashCode(): number;
    isExternal(): boolean;
    isInternal(): boolean;
    isMultiValuePermitted(): boolean;
}