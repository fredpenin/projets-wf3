<?php
if( ! function_exists( 'biography_content_end' ) ) :

/**
 * Content Start
 *
 * @since Biography 1.0.0
 *
 * @param null
 * @return void
 *
 */
    function biography_content_end(){
        if ( !is_front_page() || ( is_front_page() && 'posts' == get_option( 'show_on_front' ) ) ) {
            echo "</div>";/*#content*/
        }
    
    }
endif;
add_action( 'biography_action_after_content', 'biography_content_end', 10 );

if ( ! function_exists( 'biography_footer' ) ) :
    /**
     * Footer content
     *
     * @since Biography 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function biography_footer() {
        global $biography_customizer_saved_options;
        ?>
        <!-- *****************************************
             Footer section starts
    ****************************************** -->
        <div class="clearfix"></div>
        <footer id="colophon" class="site-footer" role="contentinfo">
            <div class="site-info">
                <?php
                    if(isset($biography_customizer_saved_options['biography-copyright-text'])){
                        echo '<div class="copyright">'.htmlspecialchars_decode( wp_kses_post( $biography_customizer_saved_options['biography-copyright-text'] ))."</div>";
                    }
                ?>
                <a href="<?php echo esc_url( 'https://wordpress.org/', 'biography' ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'biography' ), 'WordPress' ); ?></a>
                <span class="sep"> | </span>
                <?php printf( esc_html__( ' %1$s by %2$s.', 'biography' ), 'Biography', '<a href="'. esc_url( 'http://www.yamchhetri.com/','biography' ).'" rel="designer">'.esc_html__('Yam Chhetri','biography' ).'</a>' );
                    if ( function_exists( 'the_privacy_policy_link' ) ) {
                        the_privacy_policy_link( '<span> | </span>' );
                    }
                         ?>
            </div><!-- .site-info -->
	    </footer><!-- #colophon -->
        <!-- *****************************************
                 Footer section ends
        ****************************************** -->
    <?php
    }
endif;
add_action( 'biography_action_footer', 'biography_footer', 10 );

if ( ! function_exists( 'biography_page_end' ) ) :
    /**
     * Page end
     *
     * @since Biography 1.0.0
     *
     * @param null
     * @return null
     *
     */
    function biography_page_end() {
        global $biography_customizer_saved_options;
         if( 1 !=  $biography_customizer_saved_options['biography-enable-back-to-top'] ){
         return;
         }
        ?>
            <a class="biography-back-to-top" href="#page"><i class="fa fa-angle-up"></i></a>
        
       </div><!-- #page -->
    <?php
    }
endif;
add_action( 'biography_action_after', 'biography_page_end', 10 );