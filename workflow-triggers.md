# Workflow 触发条件说明

## 1. CI Workflow
```yaml
on:
  push:
    branches: [ main, develop ]    # 推送到主要分支
  pull_request:
    branches: [ main, develop ]    # 创建 PR 到主要分支
```
**执行场景**: 
- 每次代码推送
- 每次创建或更新 PR
- **目的**: 确保代码质量

## 2. Deploy Web App Workflow  
```yaml
on:
  push:
    branches: [ main ]             # 仅 main 分支推送
  workflow_dispatch:               # 手动触发
```
**执行场景**: 
- main 分支有新提交时
- 开发者手动触发部署
- **目的**: 部署生产环境

## 3. Release Workflow
```yaml
on:
  push:
    tags:
      - 'v*'                      # 版本标签 (v1.0.0, v2.1.0 等)
```
**执行场景**: 
- 创建版本标签时: `git tag v1.0.0 && git push origin v1.0.0`
- **目的**: 正式版本发布

## 实际使用流程

### 日常开发:
1. 提交代码 → 触发 **CI**
2. 创建 PR → 再次触发 **CI** 
3. 合并到 main → 触发 **CI + Deploy Web**

### 版本发布:
1. 准备发布 → 创建标签 → 触发 **Release**
2. 自动构建所有平台的桌面应用

### 紧急部署:
- GitHub Actions 页面 → Deploy Web App → "Run workflow"