Add-Type -AssemblyName System.Drawing

$srcPath = (Resolve-Path "public\logo2.png").Path
$outPath = (Resolve-Path "public").Path + "\favicon-circle.png"
$size = 64

$src = [System.Drawing.Image]::FromFile($srcPath)
$bmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
$g.Clear([System.Drawing.Color]::Transparent)

$clipPath = New-Object System.Drawing.Drawing2D.GraphicsPath
$clipPath.AddEllipse(0, 0, $size, $size)
$g.SetClip($clipPath)
$g.DrawImage($src, 0, 0, $size, $size)

$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
$src.Dispose()

Write-Host "Favicon saved to: $outPath"
