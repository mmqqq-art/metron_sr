#!/bin/bash

# 初始化 Git 仓库（如果还没有初始化）
git init

# 添加所有更改到暂存区
git add .

# 提交这些更改
git commit -m "Initial commit with all files and folders"

# 切换到 main 分支
git branch -M main

# 添加远程仓库
git remote add origin https://github.com/metron_sr/metron_sr.git

# 拉取远程仓库的更改并合并，允许不相关的历史合并
git pull origin main --allow-unrelated-histories

# 强制推送你的更改到远程仓库，覆盖远程仓库内容
git push -u origin main --force
