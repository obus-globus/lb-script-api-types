import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockComponent } from '../../../../../net/lenni0451/mcstructs_bedrock/text/BedrockComponent.d.ts'
export class RootBedrockComponent extends BedrockComponent {
    constructor()
    constructor(...arg0: BedrockComponent[])
    constructor(arg0: BedrockComponent[])
    readonly components: BedrockComponent[];
    addComponent(arg0: BedrockComponent): RootBedrockComponent;
    asString(): string;
    copy(): BedrockComponent;
    equals(arg0: Object | null): boolean;
    forEach(arg0: (param0: BedrockComponent) => void): RootBedrockComponent;
    getComponents(): BedrockComponent[];
    hashCode(): number;
    toString(): string;
}