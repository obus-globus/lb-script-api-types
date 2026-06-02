import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharacterData } from '../../../org/w3c/dom/CharacterData.d.ts'
export interface Text extends Object, CharacterData{
    getWholeText(): string;
    isElementContentWhitespace(): boolean;
    replaceWholeText(arg0: string): Text;
    splitText(arg0: number): Text;
}