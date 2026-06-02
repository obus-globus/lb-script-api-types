import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LanguageTriggerCharacters extends Object {
    constructor()
    // private anyLangTriggerCharacters: string[];
    // private langTriggerCharacters: { [key: string]: string[] };
    add(languageId: string, triggerCharacters: string[]): void;
    getTriggerCharacters(languageId: string): string[];
}