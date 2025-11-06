# 📋 Guía de subida a GitHub

## Pasos para subir el repositorio a GitHub

### 1️⃣ Crear el repositorio en GitHub

1. Ve a [github.com](https://github.com)
2. Haz clic en el botón **"New"** (o el icono **+** en la esquina superior derecha)
3. Configura el repositorio:

   - **Repository name**: `web-components-project`
   - **Description**: `Colección de proyectos educativos con Web Components nativos (Vanilla JavaScript)`
   - **Visibility**: Public (o Private si lo prefieres)
   - ⚠️ **NO** marques:
     - [ ] Add a README file
     - [ ] Add .gitignore
     - [ ] Choose a license

   (Ya tienes estos archivos localmente)

4. Haz clic en **"Create repository"**

---

### 2️⃣ Conectar tu repositorio local con GitHub

GitHub te mostrará instrucciones. Usa estas:

```powershell
# Cambiar la rama de 'master' a 'main' (estándar actual)
cd "c:\Users\salvadfe\Documents\salvadfe\CURSOS\Aplicaciones con Web components, Lit Element y Stenciljs\web-components-project"
git branch -M main

# Conectar con GitHub (reemplaza TU_USUARIO con tu nombre de usuario)
git remote add origin https://github.com/TU_USUARIO/web-components-project.git

# Subir el código
git push -u origin main
```

---

### 3️⃣ Verificar la subida

1. Refresca la página de tu repositorio en GitHub
2. Deberías ver:
   - ✅ `README.md` principal con el índice de proyectos
   - ✅ Carpeta `chrono/` con todos los archivos
   - ✅ `.gitignore`
   - ✅ 16 archivos en total

---

## 🎯 Comandos completos (copia y pega)

```powershell
# Navegar a la carpeta del proyecto
cd "c:\Users\salvadfe\Documents\salvadfe\CURSOS\Aplicaciones con Web components, Lit Element y Stenciljs\web-components-project"

# Cambiar rama a 'main'
git branch -M main

# Conectar con GitHub (REEMPLAZA TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/web-components-project.git

# Verificar conexión
git remote -v

# Subir código
git push -u origin main
```

---

## 🔐 Si GitHub te pide autenticación

### Opción 1: HTTPS con Personal Access Token (recomendado)

1. Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Genera un nuevo token con permisos de `repo`
3. Copia el token
4. Cuando hagas `git push`, usa el token como contraseña

### Opción 2: SSH

```powershell
# Generar clave SSH (si no tienes una)
ssh-keygen -t ed25519 -C "tu_email@example.com"

# Copiar la clave pública
cat ~/.ssh/id_ed25519.pub

# Añadir en GitHub → Settings → SSH and GPG keys → New SSH key
```

Luego usa la URL SSH en lugar de HTTPS:

```powershell
git remote set-url origin git@github.com:TU_USUARIO/web-components-project.git
```

---

## 📝 Comandos útiles para el futuro

```powershell
# Ver estado de cambios
git status

# Añadir cambios
git add .

# Hacer commit
git commit -m "Descripción del cambio"

# Subir cambios
git push

# Ver log de commits
git log --oneline

# Crear nueva rama
git checkout -b feature/nuevo-proyecto

# Cambiar de rama
git checkout main

# Ver ramas
git branch -a
```

---

## 🚀 Próximos pasos después de subir

1. **Añadir descripción y topics en GitHub**:

   - Topics: `web-components`, `vanilla-javascript`, `custom-elements`, `shadow-dom`, `educational`

2. **Configurar GitHub Pages** (opcional):

   - Settings → Pages → Source: main branch / root
   - Tu cronómetro estará en: `https://TU_USUARIO.github.io/web-components-project/chrono/`

3. **Añadir badges al README** (opcional):
   ```markdown
   ![GitHub stars](https://img.shields.io/github/stars/TU_USUARIO/web-components-project)
   ![License](https://img.shields.io/badge/license-MIT-blue)
   ![Web Components](https://img.shields.io/badge/Web%20Components-native-green)
   ```

---

## ✅ Checklist de verificación

- [ ] Repositorio creado en GitHub
- [ ] `git remote add origin` ejecutado
- [ ] `git push -u origin main` ejecutado con éxito
- [ ] Archivos visibles en GitHub
- [ ] README principal se visualiza correctamente
- [ ] README de chrono se visualiza correctamente
- [ ] ARQUITECTURA.md con diagramas Mermaid se visualiza
- [ ] Descripción y topics añadidos en GitHub

---

**¡Todo listo para compartir tu proyecto! 🎉**
