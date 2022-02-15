FROM ubuntu:20.04

# [Option] Upgrade OS packages to their latest versions
ARG UPGRADE_PACKAGES="false"

# [Option] Enable non-root Docker access in container
ARG ENABLE_NONROOT_DOCKER="true"

# [Option] Use the OSS Moby Engine instead of the licensed Docker Engine
ARG USE_MOBY="true"

# Install needed packages and setup non-root user. Use a separate RUN statement to add your
# own dependencies. A user of "automatic" attempts to reuse an user ID if one already exists.
ARG USERNAME=automatic
ARG USER_UID=1000
ARG USER_GID=$USER_UID
ENV DOCKER_BUILDKIT=1
