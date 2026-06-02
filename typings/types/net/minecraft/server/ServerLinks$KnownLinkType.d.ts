import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ServerLinks$Entry } from '../../../net/minecraft/server/ServerLinks$Entry.d.ts'
export class ServerLinks$KnownLinkType extends Enum<ServerLinks$KnownLinkType> {
    static ANNOUNCEMENTS: ServerLinks$KnownLinkType;
    static BUG_REPORT: ServerLinks$KnownLinkType;
    static COMMUNITY: ServerLinks$KnownLinkType;
    static COMMUNITY_GUIDELINES: ServerLinks$KnownLinkType;
    static FEEDBACK: ServerLinks$KnownLinkType;
    static FORUMS: ServerLinks$KnownLinkType;
    static NEWS: ServerLinks$KnownLinkType;
    static STATUS: ServerLinks$KnownLinkType;
    static STREAM_CODEC: StreamCodec<ByteBuf, ServerLinks$KnownLinkType>;
    static SUPPORT: ServerLinks$KnownLinkType;
    static WEBSITE: ServerLinks$KnownLinkType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ServerLinks$KnownLinkType;
    static values(): (Object | null)[];
    private constructor(id: number, name: string)
    // private id: number;
    // private name: string;
    create(link: URI): ServerLinks$Entry;
    // private displayName(): Component;
    name(): "BUG_REPORT" | "COMMUNITY_GUIDELINES" | "SUPPORT" | "STATUS" | "FEEDBACK" | "COMMUNITY" | "WEBSITE" | "FORUMS" | "NEWS" | "ANNOUNCEMENTS";
}