import type { ArgumentParser } from '../../../../eu/pb4/placeholders/api/ArgumentParser.d.ts'
import type { Placeholder } from '../../../../eu/pb4/placeholders/api/Placeholder.d.ts'
import type { Placeholder$Handler } from '../../../../eu/pb4/placeholders/api/Placeholder$Handler.d.ts'
import type { PlaceholderContext } from '../../../../eu/pb4/placeholders/api/PlaceholderContext.d.ts'
import type { PlaceholderResult } from '../../../../eu/pb4/placeholders/api/PlaceholderResult.d.ts'
import type { Placeholders$PlaceholderGetter } from '../../../../eu/pb4/placeholders/api/Placeholders$PlaceholderGetter.d.ts'
import type { Placeholders$PlaceholderListChangedCallback } from '../../../../eu/pb4/placeholders/api/Placeholders$PlaceholderListChangedCallback.d.ts'
import type { ServerPlaceholderContext } from '../../../../eu/pb4/placeholders/api/ServerPlaceholderContext.d.ts'
import type { NodeParser } from '../../../../eu/pb4/placeholders/api/parsers/NodeParser.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class Placeholders extends Object {
    static COMMON_PLACEHOLDER_GETTER: Placeholders$PlaceholderGetter<PlaceholderContext>;
    static COMMON_PLACEHOLDER_PARSER: NodeParser;
    static SERVER_PLACEHOLDER_GETTER: Placeholders$PlaceholderGetter<ServerPlaceholderContext>;
    static SERVER_PLACEHOLDER_PARSER: NodeParser;
    static getCommonPlaceholder(paramarg0: Identifier): Placeholder<PlaceholderContext, Object>;
    static getCommonPlaceholders(): Map<Identifier, Object | null>;
    static getServerPlaceholder(paramarg0: Identifier): Placeholder<ServerPlaceholderContext, Object>;
    static getServerPlaceholders(): Map<Identifier, Object | null>;
    static parseCommonPlaceholder(paramarg0: Identifier, paramarg1: string, paramarg2: PlaceholderContext): PlaceholderResult;
    static parseServerPlaceholder(paramarg0: Identifier, paramarg1: string, paramarg2: ServerPlaceholderContext): PlaceholderResult;
    static registerCommon(paramarg0: Identifier, paramarg1: ArgumentParser<Object>, paramarg2: (param0: PlaceholderContext, param1: Object | null) => eu.pb4.placeholders.api.PlaceholderResult): void;
    static registerCommon(paramarg0: Identifier, paramarg1: (param0: PlaceholderContext, param1: string) => eu.pb4.placeholders.api.PlaceholderResult): void;
    static registerCommon(paramarg0: Placeholder<PlaceholderContext, Object>): void;
    static registerCommonChangeEvent(paramarg0: Placeholders$PlaceholderListChangedCallback): void;
    static registerServer(paramarg0: Identifier, paramarg1: ArgumentParser<Object>, paramarg2: (param0: ServerPlaceholderContext, param1: Object | null) => eu.pb4.placeholders.api.PlaceholderResult): void;
    static registerServer(paramarg0: Identifier, paramarg1: (param0: ServerPlaceholderContext, param1: string) => eu.pb4.placeholders.api.PlaceholderResult): void;
    static registerServer(paramarg0: Placeholder<ServerPlaceholderContext, Object>): void;
    static registerServerChangeEvent(paramarg0: Placeholders$PlaceholderListChangedCallback): void;
    constructor()
}