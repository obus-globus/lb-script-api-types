import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class MolangVersion extends Enum<MolangVersion> {
    static BeforeVersioning: MolangVersion;
    static ComparisonAndLogicalOperatorPrecedence: MolangVersion;
    static ConditionalOperatorAssociativity: MolangVersion;
    static DeprecateOldBlockQueryNames: MolangVersion;
    static DeprecatedSnifferAndCamelQueries: MolangVersion;
    static DivideByNegativeValue: MolangVersion;
    static ExpressionErrorMessages: MolangVersion;
    static FixedCapeFlapAmountQuery: MolangVersion;
    static FixedItemRemainingUseDurationQuery: MolangVersion;
    static HardcodedMolang: MolangVersion;
    static Initial: MolangVersion;
    static Invalid: MolangVersion;
    static Latest: MolangVersion;
    static LeafSupportingInFirstSolidBlockBelow: MolangVersion;
    static QueryBlockPropertyRenamedToState: MolangVersion;
    static UnexpectedOperatorErrors: MolangVersion;
    static getByName(paramarg0: string): MolangVersion;
    static getByName(paramarg0: string, paramarg1: MolangVersion): MolangVersion;
    static getByValue(paramarg0: number): MolangVersion;
    static getByValue(paramarg0: number, paramarg1: MolangVersion): MolangVersion;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MolangVersion;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: MolangVersion)
    readonly value: number;
    getValue(): number;
    name(): "Invalid" | "BeforeVersioning" | "Initial" | "FixedItemRemainingUseDurationQuery" | "ExpressionErrorMessages" | "UnexpectedOperatorErrors" | "ConditionalOperatorAssociativity" | "ComparisonAndLogicalOperatorPrecedence" | "DivideByNegativeValue" | "FixedCapeFlapAmountQuery" | "QueryBlockPropertyRenamedToState" | "DeprecateOldBlockQueryNames" | "DeprecatedSnifferAndCamelQueries" | "LeafSupportingInFirstSolidBlockBelow" | "Latest" | "HardcodedMolang";
}