import type { LambdaForm } from '../../../java/lang/invoke/LambdaForm.d.ts'
import type { LambdaForm$Name } from '../../../java/lang/invoke/LambdaForm$Name.d.ts'
import type { LambdaForm$NamedFunction } from '../../../java/lang/invoke/LambdaForm$NamedFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LambdaFormBuffer extends Object {
    constructor(arg0: LambdaForm)
    // private arity: number;
    // private dups: LambdaForm$Name[];
    // private firstChange: number;
    // private flags: number;
    // private length: number;
    // private names: LambdaForm$Name[];
    // private originalNames: LambdaForm$Name[];
    // private resultName: LambdaForm$Name;
    changeName(arg0: number, arg1: LambdaForm$Name): void;
    // private clearDuplicatesAndNulls(): void;
    // private copyNamesInto(arg0: LambdaForm$Name[]): LambdaForm$Name[];
    endEdit(): LambdaForm;
    growNames(arg0: number, arg1: number): void;
    inTrans(): boolean;
    insertExpression(arg0: number, arg1: LambdaForm$Name): LambdaFormBuffer;
    // private insertName(arg0: number, arg1: LambdaForm$Name, arg2: boolean): void;
    insertParameter(arg0: number, arg1: LambdaForm$Name): LambdaFormBuffer;
    // private lambdaForm(): LambdaForm;
    lastIndexOf(arg0: LambdaForm$Name): number;
    name(arg0: number): LambdaForm$Name;
    nameArray(): LambdaForm$Name[];
    // private noteDuplicate(arg0: number, arg1: number): void;
    ownedCount(): number;
    renameParameter(arg0: number, arg1: LambdaForm$Name): LambdaFormBuffer;
    replaceFunctions(arg0: LambdaForm$NamedFunction[], arg1: LambdaForm$NamedFunction[], ...arg2: Object[]): LambdaFormBuffer;
    // private replaceName(arg0: number, arg1: LambdaForm$Name): void;
    replaceParameterByCopy(arg0: number, arg1: number): LambdaFormBuffer;
    replaceParameterByNewExpression(arg0: number, arg1: LambdaForm$Name): LambdaFormBuffer;
    resultIndex(): number;
    setNames(arg0: LambdaForm$Name[]): void;
    setResult(arg0: LambdaForm$Name): void;
    startEdit(): void;
    // private verifyArity(): boolean;
    // private verifyFirstChange(): boolean;
}