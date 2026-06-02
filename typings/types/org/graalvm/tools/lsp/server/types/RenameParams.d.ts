import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
import type { Position } from '../../../../../../org/graalvm/tools/lsp/server/types/Position.d.ts'
import type { TextDocumentIdentifier } from '../../../../../../org/graalvm/tools/lsp/server/types/TextDocumentIdentifier.d.ts'
import type { WorkDoneProgressParams } from '../../../../../../org/graalvm/tools/lsp/server/types/WorkDoneProgressParams.d.ts'
export class RenameParams extends WorkDoneProgressParams {
    static create(paramtextDocument: TextDocumentIdentifier, paramposition: Position, paramnewName: string): RenameParams;
    static create(): WorkDoneProgressParams;
    constructor(jsonData: JSONObject)
    equals(obj: Object | null): boolean;
    getNewName(): string;
    getPosition(): Position;
    getTextDocument(): TextDocumentIdentifier;
    hashCode(): number;
    setNewName(newName: string): RenameParams;
    setPosition(position: Position): RenameParams;
    setTextDocument(textDocument: TextDocumentIdentifier): RenameParams;
}