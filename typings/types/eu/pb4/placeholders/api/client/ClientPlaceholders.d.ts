import type { ArgumentParser } from '../../../../../eu/pb4/placeholders/api/ArgumentParser.d.ts'
import type { Placeholder } from '../../../../../eu/pb4/placeholders/api/Placeholder.d.ts'
import type { Placeholder$Handler } from '../../../../../eu/pb4/placeholders/api/Placeholder$Handler.d.ts'
import type { PlaceholderResult } from '../../../../../eu/pb4/placeholders/api/PlaceholderResult.d.ts'
import type { Placeholders$PlaceholderGetter } from '../../../../../eu/pb4/placeholders/api/Placeholders$PlaceholderGetter.d.ts'
import type { Placeholders$PlaceholderListChangedCallback } from '../../../../../eu/pb4/placeholders/api/Placeholders$PlaceholderListChangedCallback.d.ts'
import type { ClientPlaceholderContext } from '../../../../../eu/pb4/placeholders/api/client/ClientPlaceholderContext.d.ts'
import type { NodeParser } from '../../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientPlaceholders extends Object {
    static CLIENT_PLACEHOLDER_GETTER: Placeholders$PlaceholderGetter<ClientPlaceholderContext>;
    static CLIENT_PLACEHOLDER_PARSER: NodeParser;
    static getClientPlaceholder(paramarg0: Identifier): Placeholder<ClientPlaceholderContext, Object>;
    static getClientPlaceholders(): Map<Identifier, Object | null>;
    static parseClientPlaceholder(paramarg0: Identifier, paramarg1: string, paramarg2: ClientPlaceholderContext): PlaceholderResult;
    static registerClient(paramarg0: Identifier, paramarg1: ArgumentParser<Object>, paramarg2: (param0: ClientPlaceholderContext, param1: Object | null) => eu.pb4.placeholders.api.PlaceholderResult): void;
    static registerClient(paramarg0: Identifier, paramarg1: (param0: ClientPlaceholderContext, param1: string) => eu.pb4.placeholders.api.PlaceholderResult): void;
    static registerClient(paramarg0: Placeholder<ClientPlaceholderContext, Object>): void;
    static registerClientChangeEvent(paramarg0: Placeholders$PlaceholderListChangedCallback): void;
    constructor()
}