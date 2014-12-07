require "compass/import-once/activate"

project_type = :stand_alone
http_path = "/"
css_dir = "css"
sass_dir = "sass"
fonts_dir = "fonts"
images_dir = "img"
javascripts_dir = "js"
# http_images_path = "http://my-site.com/img"
# http_generated_images_path = "http://my-site.com/img" //sprites
# environment = :production //сжимает выходной стиль css
preferred_syntax = :scss
output_style = :expanded  #or :nested or :compact or :compressed
relative_assets = true 
line_comments = false

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass