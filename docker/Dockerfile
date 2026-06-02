# syntax=docker/dockerfile:1
#
# Reproducible environment for regenerating the LiquidBounce script-api types.
#
# The flow runs a REAL LiquidBounce client headlessly (Xvfb + Mesa llvmpipe
# software GL) so ts-defgen.js can introspect the live class graph. The image
# therefore needs:
#   - JDK 25  — to run LiquidBounce (nextgen requires JVM 25)
#   - JDK 21  — to build the Kotlin ts-generator shadow jar
#   - Xvfb + Mesa (llvmpipe) — software OpenGL, no GPU
#   - Python 3 — post-patches (apply-kdoc, fix-binding-types)
#
# The heavy downloads (Gradle deps + Minecraft assets/libraries via Loom) live
# in GRADLE_USER_HOME=/cache/gradle, and the cloned repo + LB source live in
# /work — mount both as named volumes so re-runs skip the downloads and only
# the ~50-60 min softpipe introspection remains.
FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y --no-install-recommends \
      ca-certificates curl git unzip xz-utils nodejs \
      python3 \
      openjdk-21-jdk-headless \
      xvfb mesa-utils mesa-vulkan-drivers \
      libgl1-mesa-dri libglx-mesa0 libgl1 libegl1 libgbm1 libglu1-mesa \
      libx11-6 libxext6 libxrender1 libxtst6 libxi6 libxxf86vm1 \
      libxrandr2 libxcursor1 libxinerama1 \
    && rm -rf /var/lib/apt/lists/*

# JDK 25 (Temurin) at the exact path tools/regen-types.sh expects.
RUN set -eux; \
    arch="$(dpkg --print-architecture)"; \
    case "$arch" in amd64) a=x64 ;; arm64) a=aarch64 ;; *) echo "unsupported arch $arch" >&2; exit 1 ;; esac; \
    curl -fsSL "https://api.adoptium.net/v3/binary/latest/25/ga/linux/${a}/jdk/hotspot/normal/eclipse" -o /tmp/jdk25.tgz; \
    mkdir -p /usr/lib/jvm; \
    tar -xzf /tmp/jdk25.tgz -C /usr/lib/jvm; \
    rm /tmp/jdk25.tgz; \
    ln -sfn "$(ls -d /usr/lib/jvm/jdk-25*)" /usr/lib/jvm/java-25-openjdk-amd64; \
    /usr/lib/jvm/java-25-openjdk-amd64/bin/java -version; \
    /usr/lib/jvm/java-21-openjdk-amd64/bin/java -version

ENV GRADLE_USER_HOME=/cache/gradle \
    JAVA_HOME=/usr/lib/jvm/java-25-openjdk-amd64 \
    PATH=/usr/lib/jvm/java-25-openjdk-amd64/bin:/usr/local/bin:/usr/bin:/bin

VOLUME ["/cache/gradle", "/work"]
WORKDIR /work

COPY docker/entrypoint.sh /usr/local/bin/regen-entrypoint
RUN chmod +x /usr/local/bin/regen-entrypoint

# Default: run the whole flow (clone/update repo → regen → promote). Pass
# --no-promote etc. through to run-regen.sh.
ENTRYPOINT ["/usr/local/bin/regen-entrypoint"]
