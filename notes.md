# Notes for making notification component

## Things to figure out

- Get the notifiction counter to display number of notifications on page load.
- Change counter number when a notification is read.
- Change notification count to zero when 'mark-all-as-read' is clicked.
- 

## Structure and classes or ids

- html
    - body
        - div.main-wrapper
            - header
                - .main-headng
                    - h1
                    - p.notice-count
                - p#notice-read-all-btn
        - main
            - section.notice-content
                - div.notice-avatar
                    - img
                - div.notice-text
                    - p{span.avatar-name} ..... {span.notice-about}{span.new-notice-id}
                    - p.notice-time
            - /section

            - section.notice-content
                - div.notice-avatar
                    - img
                - div.notice-text
                    - p{span.avatar-name} ..... {span.new-notice-id}
                    - p.notice-time
            - /section

            - section.notice-content
                - div.notice-avatar
                    - img
                - div.notice-text
                    - p{span.avatar-name} ..... {span.notice-about}{span.new-notice-id}
                    - p.notice-time
            - /section

            - section.notice-content
                - div.notice-avatar
                    - img
                - div.notice-text
                    - p{span.avatar-name} .....
                    - p.notice-time
                    - div.notice-message
                        - p
            - /section

            - section.notice-content.with-pic-comment
                - div.notice-avatar
                    - img
                - div.notice-text
                    - p{span.avatar-name} ..... 
                    - p.notice-time
                - div.comment-pic
                    - img
            - /section

            - section.notice-content
                - div.notice-avatar
                    - img
                - div.notice-text
                    - p{span.avatar-name} ..... {span.notice-about}
                    - p.notice-time
            - /section

            - section.notice-content
                - div.notice-avatar
                    - img
                - div.notice-text
                    - p{span.avatar-name} ..... {span.notice-about}
                    - p.notice-time
            - /section
        - /main

        - footer
        - /footer

        - javaScript

    - /body
- /html
        