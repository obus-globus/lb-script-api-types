import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Profile } from '../../../../../net/irisshaders/iris/shaderpack/option/Profile.d.ts'
export class Profile$Builder extends Object {
    constructor(arg0: string)
    // private disabledPrograms: string[];
    // private name: string;
    // private optionValues: { [key: string]: string };
    addAll(arg0: Profile): Profile$Builder;
    build(): Profile;
    disableProgram(arg0: string): Profile$Builder;
    option(arg0: string, arg1: string): Profile$Builder;
}