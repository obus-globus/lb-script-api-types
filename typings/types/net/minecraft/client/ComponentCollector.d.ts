import type { Object } from '../../../java/lang/Object.d.ts'
import type { FormattedText } from '../../../net/minecraft/network/chat/FormattedText.d.ts'
export class ComponentCollector extends Object {
    constructor()
    // private parts: FormattedText[];
    append(component: FormattedText): void;
    getResult(): FormattedText;
    getResultOrEmpty(): FormattedText;
    reset(): void;
}