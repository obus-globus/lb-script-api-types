import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ChangeSetResults extends Object {
    constructor()
    addedFromChangeSet(arg0: string): void;
    addedFromStream(arg0: string): void;
    deleted(arg0: string): void;
    getAddedFromChangeSet(): string[];
    getAddedFromStream(): string[];
    getDeleted(): string[];
    hasBeenAdded(arg0: string): boolean;
}