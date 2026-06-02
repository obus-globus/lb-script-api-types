import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionSet } from '../../../../../net/irisshaders/iris/shaderpack/option/OptionSet.d.ts'
import type { OptionValues } from '../../../../../net/irisshaders/iris/shaderpack/option/values/OptionValues.d.ts'
export class Profile extends Object {
    private constructor(arg0: string, arg1: { [key: string]: string }, arg2: string[])
    disabledPrograms: string[];
    name: string;
    optionValues: { [key: string]: string };
    precedence: number;
    matches(arg0: OptionSet, arg1: OptionValues): boolean;
}