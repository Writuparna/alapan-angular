<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Example
 *
 * This is an example of a few basic user interaction methods you could use
 * all done with a hardcoded array.
 *
 * @package		CodeIgniter
 * @subpackage	Rest Server
 * @category	Controller
 * @author		Phil Sturgeon
 * @link		http://philsturgeon.co.uk/code/
*/

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
require APPPATH.'/libraries/REST_Controller.php';

class Alapon extends REST_Controller
{
    function banner_get()
    {
        $data = array();
        $data['result'] =  $this->Headerbanner_model->get_banners();

        if($data)
        {
            $this->response($data, 200); // 200 being the HTTP response code
        }

        else
        {
            $this->response(array('error' => 'Banner could not be found'), 404);
        }
    }

    function welcome_get()
    {
        $data = array();
        $data['result'] =  $this->Page_model->get_page(1);

        if($data)
        {
            $this->response($data, 200); // 200 being the HTTP response code
        }

        else
        {
            $this->response(array('error' => 'Banner could not be found'), 404);
        }
    }

    function about_owner_get()
    {
        $data = array();
        $data['result'] =  $this->Page_model->get_page(2);

        if($data)
        {
            $this->response($data, 200); // 200 being the HTTP response code
        }

        else
        {
            $this->response(array('error' => 'Banner could not be found'), 404);
        }
    }

    function programm_get()
    {
        $data = array();
        $data['result'] =  $this->Programme_model->get_homepage_programmes(4);

        if($data)
        {
            $this->response($data, 200); // 200 being the HTTP response code
        }

        else
        {
            $this->response(array('error' => 'Banner could not be found'), 404);
        }
    }

    function cd_evnt_get()
    {
        $data = array();
        $data['result'] =  $this->Programme_model->get_homepage_programmes(1);

        if($data)
        {
            $this->response($data, 200); // 200 being the HTTP response code
        }

        else
        {
            $this->response(array('error' => 'Banner could not be found'), 404);
        }
    }

    function welwisher_get()
    {
        $data = array();
        $data['result'] =  $this->Homebanner_model->get_banners();

        if($data)
        {
            $this->response($data, 200); // 200 being the HTTP response code
        }

        else
        {
            $this->response(array('error' => 'Banner could not be found'), 404);
        }
    }

    function event_get()
    {
        $data = array();
        if(!$this->get('id'))
        {
            $data['result'] =  $this->Programme_model->get_programmes();
        }else{
            //$id = $this->get('id');   
            //$data['result'] =  $this->Testimonial_model->get_programme($id);
        }

        if($data)
        {
            $this->response($data, 200); // 200 being the HTTP response code
        }

        else
        {
            $this->response(array('error' => 'Event could not be found'), 404);
        }
    }

    function cd_release_get()
    {
        $data = array();
        if(!$this->get('id'))
        {
            $data['result'] =  $this->Cd_model->get_programmes();
        }else{
            //$id = $this->get('id');   
            //$data['result'] =  $this->Testimonial_model->get_programme($id);
        }

        if($data)
        {
            $this->response($data, 200); // 200 being the HTTP response code
        }

        else
        {
            $this->response(array('error' => 'Event could not be found'), 404);
        }
    }    

    function testimonial_get()
    {
        $data = array();
        if(!$this->get('id'))
        {
            $data['result'] =  $this->Testimonial_model->get_programmes();
        }else{
            $id = $this->get('id');   
            $data['result'] =  $this->Testimonial_model->get_programme($id);
        }

        if($data)
        {
            $this->response($data, 200); // 200 being the HTTP response code
        }

        else
        {
            $this->response(array('error' => 'Testimonial could not be found'), 404);
        }
    }

    function video_get()
    {
        $data = array();
        if(!$this->get('id'))
        {
            $data['result'] =  $this->Video_model->get_programmes();
        }else{
            $id = $this->get('id');   
            $data['result'] =  $this->Video_model->get_programme($id);
        }

        if($data)
        {
            $this->response($data, 200); // 200 being the HTTP response code
        }

        else
        {
            $this->response(array('error' => 'Video could not be found'), 404);
        }
    }

    function gallery_get()
    {
        $data = array();
        $data['result'] =  $this->Banner_model->get_banners();

        if($data)
        {
            $this->response($data, 200); // 200 being the HTTP response code
        }

        else
        {
            $this->response(array('error' => 'Banner could not be found'), 404);
        }
    }
}